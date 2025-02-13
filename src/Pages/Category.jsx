import React, { Component } from "react";
import {ulid} from 'ulid';
import PropTypes from 'prop-types';
import {getCategoryById, getItemsByCategoryId} from "../Proxy/Data";
import styles from "./Category.module.css"
import NavigationBar from "../Widgets/NavigationBar"

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: getCategoryById(this.props.id),
      detail: getItemsByCategoryId(this.props.id)

    };
  }

  handleClick = (id) => {
    window.location.href = `/detail/${id}`;
  };

  renderGetResults = () => {
    let result = [];
    let items = this.state.detail;
      items.forEach((v) => {
        result.push(<div tabIndex="0" onKeyPress={(e)=>{e.key === 'Enter' && this.handleClick(v.id)}} onClick={(e)=>{this.handleClick(v.id)}} className={styles.itemBox} key={ulid()}>
            <img className={styles.pic} src={v.imageURL} alt={v.title}/>
            <div className={styles.signbox}>
              {v.videoURL !== "" &&
                <img className={styles.playSign} src="https://live.staticflickr.com/65535/51134657326_bcc7161e10_b.jpg" alt="video" key={ulid()}/>
              }
            </div>
            <div className={styles.textContainer}>
              <a  tabIndex="-1" className={styles.subtitle} href={`/detail/${v.id}`}>{v.title}</a>
              <div className={styles.rating}>Rating: {v.rating}</div>
              <div className={styles.text}>{v.time}</div>
            </div>
          </div>);
        });
    return result;
  };

  render() {
    if (this.state.category === null) {
      window.location.replace('/404');
      return;
    }
    let navbarPosition = [ true, this.props.id];
    return (
      <div className={styles.category}>
         <NavigationBar positions={navbarPosition}/>
        <div className={styles.picBox}>
          <img className={styles.picDessert} src={this.state.category.imageURL} alt={this.state.category.name}/>
        </div>
        <h3 className={styles.title}>{this.state.category.name}</h3>
        <div>
          {this.renderGetResults()}
        </div>
      </div>
    );
  }
}

Category.propTypes = {
  id: PropTypes.string.isRequired
};
