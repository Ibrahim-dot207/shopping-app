import React from 'react';
import './App.css';

class App extends React.Component {
  state={
      products: [
        {
        "id": "1",
          "title":"Ladies Dress",
          "src":[
            "https://www.upsieutoc.com/images/2021/02/15/fit3.jpg",
            "https://www.upsieutoc.com/images/2021/02/15/fit4.jpg",
            "https://www.upsieutoc.com/images/2021/02/15/fit5.jpg",
            "https://www.upsieutoc.com/images/2021/02/15/fit6.jpg"
          ],
          "description":"A place to get the best of weeding dress",
          "content":"Choose the colors you want",
          "price": 100,
          "colors":["red","white","crimson","teal"],
          "count":1
         } 
        ],
        index:0
  };

   myRef = React.createRef();

   handleTab = index => {
     this.setState({index: index})
     const images = this.myRef.current.children;
     for( let i=0; i<images.length; i++){
       images[i].className= images[i].className.replace("active","");
     }
     images[index].className="active";
   }

   componentDidMount(){
     const {index} = this.state;
     this.myRef.current.children[index].className="active";
   }
  
  render(){
    const {products, index} = this.state;
  return(
      <div className="app">
      {
        products.map(item => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt=""/>
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <div className="colors">
                  {
                    item.colors.map((color,index) => (
                      <button style={{background : color}} key={index}>

                      </button>
                    ))
                  }
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="thumb" ref={this.myRef}>
                {
                  item.src.map((img, index) => (
                    <img src={img} alt="" key={index} onClick={() => this.handleTab(index)}/>
                  ))
                }
              </div>
              <button className="cart">ADD TO CART</button>
            </div>
          </div>
        ))
      }
      </div>
  );
};

}

export default App;