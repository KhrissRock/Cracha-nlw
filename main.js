const LinksSocialMedia = {
  github: 'khrissrock',
  youtube: 'gabrielkhriss',
  facebook: 'gabrielkhriss',
  instagram: 'khrissgabriel',
  twitter: 'khrissrocha'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()


function getGitHub(){
  
const url = `https://api.github.com/users/${LinksSocialMedia.github}`
fetch(url)
.then(response => response.json())
.then(data => {
  
  userName.textContent = data.name//mude id com nome userName
  bioText.textContent = data.bio
  userLink.href = data.html_url
  userPhoto.src = data.avatar_url
  userLogin.textContent = data.login
})

}

getGitHub()