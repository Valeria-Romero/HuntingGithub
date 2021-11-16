function fetchInfo(event){
    event.preventDefault();
    $.ajax({
        url:  `https://api.github.com/users/Valeria-Romero`,
        method: 'GET',
        success: function(showData){
            const element = `
                <p>Login: ${showData.login}</p>
                <p>Name: ${showData.name || 'N/A'}</p>
            `;
            $('.user-content').first().empty().show().append(element);
        },
        error: function(err){
            console.log(err);
        }
    });
}
// $( '.user-info' ).on('submit',fetchInfo );


