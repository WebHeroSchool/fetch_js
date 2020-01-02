
const body = document.body;
let loc = location.href;
let name1 =loc.slice(43);

fetch('https://api.github.com/users/'+name1)
  .then(res => res.json())
  .then(json => {
    let login = json.login;
    if (login !== undefined) {
      let bio = json.bio;
      let avatar = json.avatar_url;
      let url1 = json.url;
  
      const createLog = document.createElement('a');
      createLog.innerHTML=login;
      createLog.className='active';
      createLog.href=url1;
      body.appendChild(createLog);
      
      const createAvatar = document.createElement('img');
      createAvatar.src=avatar;
      createAvatar.innerHTML=avatar;
      body.appendChild(createAvatar);

        if (bio !== null){
          const createBio = document.createElement('div');
          createBio.innerHTML=`<p>${bio}</p>`;
          body.appendChild(createBio);
        
        } else {
          const errBio = document.createElement('div');
          errBio.innerHTML=`<p>Пользователь ничего не написал</p>`;
          body.appendChild(errBio);
       
    }} else {
        const err = document.createElement('p');
        err.innerHTML='Такого пользователя не существует';
        body.appendChild(err);
      }
  })
  .catch(error => alert('404'));

