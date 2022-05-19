import './FormRecoveryPassword.css';
import Button from './Button.jsx';

function FormRecoveryPassword() {
    return (
        <>
        <div className="background-recuperarsenha p-3">
            <div className="container d-flex justify-content-center background-recuperarsenha">
                <div className="col-12 col-md-8 col-lg-4 d-flex justify-content-center shadow shadow-container mt-5 mb-5 p-3 background-container-recuperarsenha">
                    <form className="col-12 col-md-6 col-lg-10 px-2">
                        <div className="text-center mb-4">
                            <h3 className="font-title-recuperarsenha">Recuperar Senha</h3>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 w-100" data-validate="Valid email is required: ex@abc.xyz">
                            <label className="label font-login font-recuperarsenha" for="name">Insira uma nova senha</label>
                            <input className="w-100 mb-2" type="text" name="password"/>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12 w-100" data-validate="Password is required">
                            <label className="label font-login font-recuperarsenha" for="name">Confirme sua nova senha</label>
                            <input className="w-100 mb-4" type="text" name="password"/>
                        </div>
                        <Button type="submit" href="/login" name="Recuperar"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default FormRecoveryPassword;