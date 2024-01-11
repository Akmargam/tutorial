import React from 'react';
import ReactDOM from 'react-dom/client';
import css from './index.css';


const BookList=()=>{
    return(
        <section className='bookList'>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
};

const Book=()=>{
    return(
        <div className='book'>
            <Image/>
            <Title/>
            <Author/>
        </div>
    );
};

const Image=()=><img src="https://images-na.ssl-images-amazon.com/images/I/81YkqyaFVEL._AC_UL900_SR900,600_.jpg" alt="" />;
const Title=()=><h3>Atomic Habits</h3> ;
const Author=()=> <h4>James Clear</h4> ;

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);