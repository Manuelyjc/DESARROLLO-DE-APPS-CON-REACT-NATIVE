import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";

const authRepository = new AuthRepositoryImpl();
const { login } = authRepository;

export const LoginAuthUseCase = async (email: string, password: string) => {
    return await login(email, password);
}
