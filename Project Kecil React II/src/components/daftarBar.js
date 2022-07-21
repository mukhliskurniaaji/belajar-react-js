import React from "react";
import ListBar from "./listsBar";
import { getData } from "../utils/data";
import ContactInput from './contactinput';

class DaftarBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            ContentsFromData : getData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    }

    onDeleteHandler(id){
        const ContentsFromData = this.state.ContentsFromData.filter(
            ContentsFromData => ContentsFromData.id !== id
        );
        this.setState({ContentsFromData});
    }

    onAddContactHandler({name,tag}){
        this.setState((prevState)=>{
            return{
                ContentsFromData : [
                    ...prevState.ContentsFromData,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl : '/images/default.jpg',
                    }
                ]
            }
        })
    }

    render(){
        return(
            <div className="contact-app">
                <h1>Aplikasi Kontak</h1>
                <h2>Tambah Kontak</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h2>Daftar Kontak</h2>
                <ListBar ContentsFromData={this.state.ContentsFromData} 
                    onDelete = {this.onDeleteHandler} />
            </div>
        )
    }
}

export default DaftarBar;