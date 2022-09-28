        let btn = document.querySelector('#verSenha')
        let btnConfirm = document.querySelector('#verconfirmarsenha')
        

        let login = document.querySelector('#login')
        let labellogin = document.querySelector('#labellogin')
        let validlogin = false


        let senha = document.querySelector('#senha')
        let labelsenha = document.querySelector('#labelsenha')
        let validsenha = false


        let confirmarsenha = document.querySelector('#confirmarsenha')
        let labelconfirmarsenha = document.querySelector('#label-confirmar-senha')
        let validconfirmarsenha = false

        let msgError = document.querySelector('#msgError')

        let msgSucesso = document.querySelector('#msgSucesso')



        login.addEventListener('keyup', () => {
            if(login.value.length <= 5){
                labellogin.setAttribute('style', 'color: red')
                labellogin.innerHTML = 'Login *Insira no minimo 8 caracteres'
                login.setAttribute('style', 'border-color:red')
                validlogin = false
            }else{
                labellogin.setAttribute('style', 'color: green')
                labellogin.innerHTML = 'Login'
                login.setAttribute('style', 'border-color:green')
                validlogin = true

            }
        })

        senha.addEventListener('keyup', () => {
            if(senha.value.length <= 7){
                labelsenha.setAttribute('style', 'color: red')
                labelsenha.innerHTML = 'Senha *Insira no minimo 8 caracteres'
                senha.setAttribute('style', 'border-color:red')
                validsenha = false
            }else{
                labelsenha.setAttribute('style', 'color: green')
                labelsenha.innerHTML = 'Senha'
                senha.setAttribute('style', 'border-color:green')
                validsenha = true

            }
        })

        confirmarsenha.addEventListener('keyup', () => {
            if(senha.value != confirmarsenha.value){
                labelconfirmarsenha.setAttribute('style', 'color: red')
                labelconfirmarsenha.innerHTML = 'Confirmar senha *Senha Diferente'
                confirmarsenha.setAttribute('style', 'border-color:red')
                validconfirmarsenha = false
            }else{
                labelconfirmarsenha.setAttribute('style', 'color: green')
                labelconfirmarsenha.innerHTML = 'Confirmar senha'
                confirmarsenha.setAttribute('style', 'border-color:green')
                validconfirmarsenha = true

            }
        })


        function cadastrar(){
            if(validlogin && validsenha && validconfirmarsenha ){
                let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

                listaUser.push(
                    {
                        nomecadastrar: login.value,
                        usercadastrar: senha.value

                    }
                )
                localStorage.setItem('listaUser',JSON.stringify(listaUser))

                msgSucesso.setAttribute('style', 'display:block')
                msgSucesso.innerHTML = 'Cadastrado com Sucesso.'
                msgError.setAttribute('style', 'display:none')
                msgError.innerHTML = ''

                setTimeout(()=>{
                    window.location.href = 'http://127.0.0.1:5500/login/login.html'
                }, 3000)

                
            }else{
                msgError.setAttribute('style', 'display:block')
                msgError.innerHTML = 'Preecha todos os campos corretamente.'
            }
        }

        btn.addEventListener('click', () =>{
            let inputSenha = document.querySelector('#confirmarsenha')

            if (inputSenha.getAttribute('type') == 'password'){
                inputSenha.setAttribute('type', 'text')
            } else{
                inputSenha.setAttribute('type', 'password')
            }
        })
