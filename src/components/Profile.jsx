import React from 'react'

const Profile = () => {
  return (
    <main className="content">
          <img className="content-bg-img" src="https://www.alladvertising.ru/porridge/83/101/h_5190dfb41642e7d30b11a33ebe0f4883" alt="" />

          <div className="profile">
            <div className="avatar">
              <img src="https://www.1zoom.ru/big2/946/289597-frederika.jpg" alt="" />
            </div>
            <div className="profile-content">
              <h2 className="name">Dmitry K.</h2>
              <div>Date of Birth: 2 january</div>
              <div>City: Tomsk</div>
              <div>Education: BSU'11</div>
              <div>Web site: </div>
            </div>
           
          </div>

          <div className="posts">

            <div className="my-post">
              <h3>My posts</h3>
              <form className="form-post">
                <textarea name="new-post">
                  Your news...
                </textarea>
                <input type="submit" value="Send"/>
              </form>
            </div>

            <article className="post">
              <div className="avatar">
                <img src="https://www.1zoom.ru/big2/946/289597-frederika.jpg" alt="" />
              </div>
              <div className="message">
                  <p>Hey, why nobody love me?</p>
              </div>
            </article>

            <article className="post">
              <div className="avatar">
                <img src="https://www.1zoom.ru/big2/946/289597-frederika.jpg" alt="" />
              </div>
              <div className="message">
                  <p>Hey, why nobody love me?</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, exercitationem inventore tenetur ea aspernatur voluptatibus possimus expedita voluptates explicabo beatae itaque nostrum reprehenderit dolores optio, ad quidem facilis aliquam alias.</p>
              </div>
            </article>

          </div>
        </main>
  )
}

export default Profile