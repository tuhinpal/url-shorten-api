## Url Shorten API
[![Watch it on YouTube](https://img.shields.io/badge/Watch%20it%20on%20youtube-red?style=for-the-badge&logo=youtube "Watch it on YouTube")](https://youtu.be/TmSohwAM6Ss "Watch it on YouTube")

### API Endpoints
**1. Create a Shortned Link (Get):**<br>
*Request*

```
https://your-app-url.vercel.app/create?u={url}

##Ex.
https://url-shorten-api.vercel.app/create?u=https://thetuhin.com
```

*Response*

```json
{
  "status": true,
  "link": "https://url-shorten-api.vercel.app/?i=1603985599nRrMuJ",
  "unique_id": "1603985599nRrMuJ",
  "timestamp": 1603985599
}
```

**2. Get Main URL from Shortened URL (Get):**<br>
*Request*

```
https://your-app-url.vercel.app/?i={unique-id}

##Ex.
https://url-shorten-api.vercel.app/?i=1603985599nRrMuJ
```

*Response*

```json
{
  "status": true,
  "main_link": "https://thetuhin.com",
  "created_at": 1603985599
}
```

### Make Your Own
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fcachecleanerjeet%2Furl-shorten-api)

**Environment Variables**
- **APP_URL**<br>
(Vercel Deployment Link - https://url-shorten-api.vercel.app)
- **DB_URL**<br>
(MongoDB Url)<br><br>

## Star this Repo if you Liked it ⭐⭐⭐


<br><br>
<p align="center"> <b>My Website & Social</b></p>
<br>
<p align="center">
 
 <a href="https://tu.hin.life">
    <img alt="Website" width="30px" src="https://firebasestorage.googleapis.com/v0/b/webtuhin.appspot.com/o/githubstatic%2Fwebsite.svg?alt=media&token=5c3ea7e0-d4f7-4566-b78a-bdee6c65f03e" />
  </a>  
..
  <a href="https://www.instagram.com/jeeetpaul">
    <img alt="Instagram" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/instagram.svg" />
  </a>
..
  <a href="https://www.youtube.com/channel/UCa4FMtLpYcOBtjKOZgzTFNA">
    <img alt="YouTube" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/youtube.svg" />
  </a>
..
  <a href="https://telegram.dog/tprojects">
    <img alt="Telegram" width="30px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.2.0/icons/telegram.svg" />
  </a>
  
</p>


