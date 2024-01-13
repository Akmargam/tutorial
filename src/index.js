import React from 'react';
import ReactDOM from 'react-dom/client';
import css from './index.css';


const books = [
    {
      id:1,
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTQDVUAbWGdRUdIpM5ebXFKZydecDZ_Kua08-rqniCPTzQGyIrywU0fSc6fQ3lJUvZDpADm3yE5vkKd1z1W4tuMerA1qiZ-DggK_hZsyGE&usqp=CAE',
    },
    {
      id:2,
      author: 'James Clear',
      title: 'Atomic Habits',
      img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    },
  ];


const BookList=()=>{
    return(
        
        <section className='bookList'>
          
           {
                
            books.map((book)=>{

            return <Book {...book} key={book.id}/>
           })}
        </section>
    )
};



const Book=(props)=>{
    const {img,title,author,id} = props;
    const displayTitle=()=>{
        console.log(title);
    };
    return(
        <div className='book'>
            <img src={img} alt={title}/>
            <h3>{title}</h3> 
            <h4>{author}</h4>
            <button onClick={displayTitle}> To display Title</button>
          
        </div>
    );
};


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);