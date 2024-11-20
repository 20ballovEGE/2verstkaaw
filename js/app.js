const signMail = document.getElementById('sign-mail')
const signPass = document.getElementById('sign-pass')
const regMail = document.getElementById('reg-mail')

const reg = document.getElementById('reg')
const sign = document.getElementById('sign')

if(reg){
    reg.addEventListener('submit', function(event){
        event.preventDefault()
        let mail = regMail.value
        localStorage.setItem('mail', mail)
        console.log(mail)
        window.location.href = 'sign-in.html'
    })
}

if(sign){
    sign.addEventListener('submit', function(event){
        event.preventDefault()
        let mail = localStorage.getItem('mail')
        let testPass = '1111'
        if( signMail.value === mail && signPass.value === testPass){
            alert('Вы успешно вошли!')
             window.location.href = 'index.html'
            
        }else{
            event.stopPropagation()
            alert('Неверная почта или пароль')
        }
        console.log(mail)
        
    })
}

const tabNavs = document.querySelectorAll('.tab-nav-button')
const tabs = document.querySelectorAll('.tab')

if (tabs) {
    tabNavs.forEach(tabNav => {
        tabNav.addEventListener('click', function () {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabNavs.forEach(tabNav => tabNav.classList.remove('active'));
            this.classList.add('active');
            const target = this.getAttribute('data-tab')
            document.getElementById(target).classList.add('active');
        });
    });
}

const menu = document.getElementById('menu')
const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')

if(menu){
    navOpen.addEventListener('click', function(){
        menu.classList.add('open')
    })
    navClose.addEventListener('click', function(){
        menu.classList.remove('open')
    })
}