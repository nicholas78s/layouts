import React from "react";
import { useState } from "react";
// import url('https://fonts.googleapis.com/icon?family=Material+Icons');

const products = [{
  name: 'Nike Metcon 2',
  price: '130',
  color: 'red',
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg'
}, {
  name: 'Nike Metcon 2',
  price: '130',
  color: 'green',
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg'
}, {
  name: 'Nike Metcon 2',
  price: '130',
  color: 'blue',
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg'
}, {
  name: 'Nike Metcon 2',
  price: '130',
  color: 'black',
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg'
}, {
  name: 'Nike free run',
  price: '170',
  color: 'black',
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg'
}, {
  name: 'Nike Metcon 3',
  price: '150',
  color: 'green',
  img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg'
}];

export class Store extends React.Component {
  state = {icon: 'view_list'};

  handleClick = () => {
    this.setState((prev) => { return {
        icon: (prev.icon == 'view_list') ? 'view_module' : 'view_list'
      }
    });
  };

  render () {
    return (
      <>
        <div className="switch-container">
          <IconSwitch icon={this.state.icon} onSwitch={this.handleClick}/>
        </div>
        { (this.state.icon == 'view_list') ? <ListView items={products} /> : <CardsView cards={products} /> }
      </>
    );
  }
}

const IconSwitch = ({icon, onSwitch}) => {
  return <span className={'material-icons ' + icon} onClick={onSwitch}>{icon}</span>;
}

const CardsView = ({cards}) => {
  return (
    <div className="cards-view">
      { cards.map((item, idx) => <ShopCard key={'shop-card'+idx} item={item} />) }
    </div>
  );
}

const ShopCard = ({item}) => {
  const backgroungImage = {
    backgroundImage: 'url('+item.img+')'    
  };

  return (
    <div className="shop-card" style={backgroungImage}>
      <div className="name-container">
        <div className="name">{item.name}</div>
        <div className="color">{item.color}</div>
      </div>
      <div className="button-container">
        <div className="price">${item.price}</div>
        <button><span>Add to cart</span></button>
      </div>
    </div>
  );
}

const ListView = ({items}) => {
  return (
    <div className="list_view">
      { items.map((item, idx) => <ShopItem key={'shop-item-'+idx} item={item} />) }
    </div>
  );
}

const ShopItem = ({item}) => {
  const backgroungImage = {
    backgroundImage: 'url('+item.img+')'    
  };

  return (
    <div className="shop-item">
      {/* <img src={item.img} /> */}
      <div className="img" style={backgroungImage}></div>
      <div className="name">{item.name}</div>
      <div className="color">{item.color}</div>
      <div className="price">${item.price}</div>
      <button><span>Add to cart</span></button>
    </div>
  );
}