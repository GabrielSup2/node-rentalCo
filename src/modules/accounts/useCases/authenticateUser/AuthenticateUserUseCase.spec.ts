import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AuthenticateUserUseCase, IRequest } from "./AuthenticateUserUseCase";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { ICreateUsersDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { AppError } from "@errors/AppError";

let usersRepositoryInMemory : UsersRepositoryInMemory
let authenticateUserUseCase : AuthenticateUserUseCase
let createUserUsecase : CreateUserUseCase;

describe("Authenticate user", ()=>{
    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
        createUserUsecase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("Should be able to create a new user", ()=>{
        const user : ICreateUsersDTO = {
            username: "UserName teste",
            email: "UserTest@teste.com",
            password: "123456",
            driver_license: "005554",
            name: "user",
            avatar: ""
        }

        const userCreated = createUserUsecase.execute(user)
        expect(userCreated).toHaveProperty("token")
    }) 

    it("should not be able to authenticate a non existence user", ()=>{
        expect(async ()=>{

            const user : IRequest = {
                email: "UserUserTeste@teste.com",
                password: "123456",
            }
    
          await authenticateUserUseCase.execute(user)

        }).rejects.toBeInstanceOf(AppError)
        
      
    })

    it("Should not be able to authenticate with an incorrect password", ()=>{
        expect(async ()=>{
            const user : ICreateUsersDTO = {
                username: "UserName Incorrect Password test",
                email: "UserPasswordTest@teste.com",
                password: "12345",
                driver_license: "005599",
                name: "user",
                avatar: ""
            }

            await createUserUsecase.execute(user)
            await authenticateUserUseCase.execute({
                email : user.email,
                password : "Incorrect password"
            })
            
        }).rejects.toBeInstanceOf(AppError)
    })

})