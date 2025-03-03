
import './App.css'

function App() {

  return (
    <>
      <div className="main">
        <div className = "navbar">
            <div className="icon">
                <h2 className="logo">explor<span style={{"color": "green"}} >er</span></h2>
            </div>
            <div className="menu">
                <ul>           
                    <li><a href=" ">Hotels</a></li>
                    <li><a href=" ">Bike Rentals</a></li>
                    <li><a href=" ">Restaurants</a></li>                 
                </ul>             
            </div>        
        </div>
        <div className="content">
            <div className="explorer">
                <h2 className="heading">WELCOME TO EXPLORER</h2>
                <p className="desc">Your adventure travel expert in the <span>south</span></p>
                <form className="cn">
                    <select>
                        <option>Choose</option>
                    
                    </select>
                    <button type="submit" className="button">EXPLORE</button>
                </form>
            </div>
            <div className="image">
                <img src="/images/adventure.jpg" alt="image" height="500px" width="700px" />

            </div>
            
        </div>
    </div>
    <div id="destinations">
        <h5>Destionations</h5>
        <p style={{"color": "blueviolet","paddingBottom": "10px"}}> Just for you!your lovable destinations are here to explore!</p>
        <div className="destiny">
            <div className="card">
                <div><img src="/images/pollachi.jpg" alt="pollachi" width="350px" /></div>
                <p>Road trip fall in lovable mountains and forest</p>
                <h3>pollachi</h3>
                <p className="destiny-desc" style={{"textAlign": "left"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, nisi sapiente repellat nihil architecto neque laborum facilis deserunt itaque consectetur earum voluptas amet culpa praesentium blanditiis incidunt in voluptatem!</p>
                <button type="submit" className="button">READ MORE</button>
            </div>
            <div className="card">
                <div><img src="/images/tanjur.jpg" alt="tanjur" width="350px" /></div>
                <p>Road trip fall in lovable mountains and forest</p>
                <h3>tanjur</h3>
                <p className="destiny-desc" style={{"textAlign": "left"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, nisi sapiente repellat nihil architecto neque laborum facilis deserunt itaque consectetur earum voluptas amet culpa praesentium blanditiis incidunt in voluptatem!</p>
                <button type="submit" className="button">READ MORE</button>
            </div>
            <div className="card">
                <div><img src="/images/kumbakonam.jpg" alt="tanjur" width="350px"/></div>
                <p>Road trip fall in lovable mountains and forest</p>
                <h3>kumbakonam</h3>
                <p className="destiny-desc" style={{"textAlign": "left"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, nisi sapiente repellat nihil architecto neque laborum facilis deserunt itaque consectetur earum voluptas amet culpa praesentium blanditiis incidunt in voluptatem!</p>
                <button type="submit" className="button">READ MORE</button>
            </div>
            <div className="card">
                <div><img src="/images/masinagudi.jpg" alt="tanjur" width="350px"/></div>
                <p>Road trip fall in lovable mountains and forest</p>
                <h3>masinagudi</h3>
                <p className="destiny-desc"style={{"textAlign": "left"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, nisi sapiente repellat nihil architecto neque laborum facilis deserunt itaque consectetur earum voluptas amet culpa praesentium blanditiis incidunt in voluptatem!</p>
                <button type="submit" className="button">READ MORE</button>
            </div>
            <div className="card">
                <div><img src="/images/chidamabarm.jpg" alt="tanjur" width="350px"/></div>
                <p>Road trip fall in lovable mountains and forest</p>
                <h3>chidamabarm</h3>
                <p className="destiny-desc" style={{"textAlign": "left"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, nisi sapiente repellat nihil architecto neque laborum facilis deserunt itaque consectetur earum voluptas amet culpa praesentium blanditiis incidunt in voluptatem!</p>
                <button type="submit" className="button">READ MORE</button>
            </div>
            <div className="card">
                <div><img src="/images/tirunelveli.jpg" alt="tanjur" width="350px"/></div>
                <p>Road trip fall in lovable mountains and forest</p>
                <h3>tirunelveli</h3>
                <p className="destiny-desc" style={{"textAlign": "left"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, nisi sapiente repellat nihil architecto neque laborum facilis deserunt itaque consectetur earum voluptas amet culpa praesentium blanditiis incidunt in voluptatem!</p>
                <button type="submit" className="button">READ MORE</button>
            </div>
            
        </div>
    </div>
    <div id="contact-us" style={{"fontFamily": "Arial", "color": "black"}}>
        <form className="contact-form" >
            <h2 style={{"color": "rgb(49, 12, 83)"}}>Contact Us</h2>
            <p style={{"color": "rgb(49, 12, 83)"}}> Our Sales team will reach out you soon ASAP!</p>
            <div className="form-ele" style={{"marginBottom":"20px"}}>
                <div className="form-group" >
                    <label htmlFor="name">Full Name</label><br />
                    <input  style={{"paddingLeft": "10px"}} type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="town">Select Town</label>
                    <select id="town" name="town" style={{"paddingLeft": "10px"}}>
                        <option value="">-- Select Town --</option>
                        <option value="Town A">Town A</option>
                        <option value="Town B">Town B</option>
                        <option value="Town C">Town C</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="city" >Select City</label>
                    <select id="city" name="city" style={{"paddingLeft": "10px"}} >
                        <option value="">-- Select City --</option>
                        <option value="City X">City X</option>
                        <option value="City Y">City Y</option>
                        <option value="City Z">City Z</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="contact">Contact Number</label><br />
                    <input type="tel"  style={{"paddingLeft": "10px"}} id="contact" name="contact" placeholder="Enter your number" required />
                </div>
            </div>

            <button type="submit" className="button">Submit</button>
        </form>
        </div>
    </>
  )
}

export default App
