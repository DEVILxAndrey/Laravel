$.get('auth.php',{login: log, password: pas}, function(data) {
    let otvet = JSON.parse(data)
    if ('error' in otvet){
    alert(otvet['error']['text'])
    }
    else if ('user' in otvet){
    localStorage['token'] = otvet['user']['token']
    localStorage['expired'] = otvet['user']['expired']
    window.location.href ="tavary.html"
    }
    else{
    alert('dlkjn')
    console.log(data)
    }
    })
    