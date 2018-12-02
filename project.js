
var root_url = "http://comp426.cs.unc.edu:3001/";

$(document).ready(() => {
    $.ajax(root_url, {
        xhrFields: {withCredentials: true},
        success: (response) => {
            build_ufp_interface();
        }
    })
   
    


    $('#login_btn').on('click', () => {
        
        let user = $('#login_user').val();
        let pass = $('#login_pass').val();

        console.log(user);
        console.log(pass);

        $.ajax(root_url + 'sessions',
            {
                type: 'POST',
                xhrFields: { withCredentials: true },
                data: {
                    "user": {
                        "username": user,
                        "password": pass
                    }
                },
                success: (response) => { 
                    console.log("logged in!");
                    build_ufp_interface();
                  },
                  error: (XMLHttpRequest, textStatus, errorThrown) => {
                    console.log("failed login");
                  }
            });
    });


    $('#register_btn').on('click', () => {

        let user = $('#register_user').val();
        let pass = $('#register_pass').val();

        console.log(user);
        console.log(pass);

        $.ajax(root_url + 'users',
            {
                type: 'POST',
                xhrFields: { withCredentials: true },
                data: {
                    "user": {
                        "username": user,
                        "password": pass
                    }
                },
                success: (response) => {
                    console.log("registered");
                    build_ufp_interface();
                },
                error: () => {
                    alert('error');
                }
            });
    });

});

function build_ufp_interface() {
    let body = $('body');

    body.empty();

    body.append('<h1 class="title">Uber For Planes</h1>');
    //body.append('<button type="button" class="button" id="edit">Edit your flights</button>')
    body.append('<button type="button" class="button" id="logout_btn">Logout</button>')


    $('#logout_btn').on('click', () => {
        $.ajax(root_url, {
            xhrFields: {withCredentials: true},
            success: (response) => {
                response = false;
                build_login_interface();
            }
        })
    })

    body.append("<h2>Your Upcoming Flights<h2>");
    body.append("<h2>Your Fleet<h2>");



}

function build_login_interface() {
    let body = $('body');

    body.empty();

    body.append('<h1>A4 API Example</h1><div class="loginRegister"><div class="login"><h2>Login</h2><p>Username:</p> <input type="text" class="input" id="login_user"><br><p>Password:</p> <input type="text" class="input" id="login_pass"><br><button class="loginbutton" id="login_btn">Login</button></div><div id="mesg_div"></div><div id="register"><h2>Register</h2><p>Username:</p> <input type="text" id="register_user"><br><p>Password:</p> <input type="text" id="register_pass"><br><button id="register_btn">Login</button></div></div>');

    $('#login_btn').on('click', () => {
        
        let user = $('#login_user').val();
        let pass = $('#login_pass').val();

        console.log(user);
        console.log(pass);

        $.ajax(root_url + 'sessions',
            {
                type: 'POST',
                xhrFields: { withCredentials: true },
                data: {
                    "user": {
                        "username": user,
                        "password": pass
                    }
                },
                success: (response) => { 
                    console.log("logged in!");
                    build_ufp_interface();
                  },
                  error: (XMLHttpRequest, textStatus, errorThrown) => {
                    console.log("failed login");
                  }
            });
    });


    $('#register_btn').on('click', () => {

        let user = $('#register_user').val();
        let pass = $('#register_pass').val();

        console.log(user);
        console.log(pass);

        $.ajax(root_url + 'users',
            {
                type: 'POST',
                xhrFields: { withCredentials: true },
                data: {
                    "user": {
                        "username": user,
                        "password": pass
                    }
                },
                success: (response) => {
                    console.log("registered");
                    build_ufp_interface();
                },
                error: () => {
                    alert('error');
                }
            });
    });
}