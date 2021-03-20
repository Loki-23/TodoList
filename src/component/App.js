import React, { useState } from 'react';
import Header from "./Header";
import AddWork from "./AddWork";
import ListHeader from "./ListHeader";
import ListContent from "./ListContent";
import Footer from "./Footer";

function App(){
    const [listItem,setListItem]=useState([]);
    function AddListItem(newListItem){
        setListItem(prevItem =>{
            return [...prevItem,newListItem];
        })
    }

    function WorkCompleted(id) {
        console.log("completed");
        setListItem(prevItem => {
          return prevItem.filter((Item, index) => {
            return index !== id;
          });
        });
      }

    return <div>
        <Header />
        <AddWork toAdd={AddListItem} />
        <div className="content">
        <ListHeader />
        {listItem.map((item,index) =>{
            return (<ListContent 
                key={index}
                id={index}
                workToDo={item.todo}
                description={item.description}
                date={item.deadline}
                time={item.time}
                onComplete={WorkCompleted}
             />);

        })}
        </div>
        <Footer />
        
    </div>;
}

export default App;