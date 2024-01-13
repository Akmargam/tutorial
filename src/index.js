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
            <EventExample/>
           {
                
            books.map((book)=>{

            return <Book {...book} key={book.id}/>
           })}
        </section>
    )
};

const EventExample=()=>{
    const handleFormInput = (e) => {
        console.log('Name is: ' + e.target.name);
        console.log('Value is: ' + e.target.value);
      };
      const handleButtonClick = () => {
        alert('handle button click');
      };
      const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log('Submitted!');
      };
    return <section>
        <form onSubmit={handleFormSubmission}>
            <h2>Form</h2>
            <input
            onChange={handleFormInput}
            type="text" 
            name="Example"
            style={{margin: '1rem 0'}
            } />
        </form>
        <button onClick={handleButtonClick}>Click me</button>
    </section>
};


const Book=(props)=>{
    const {img,title,author,id} = props;
    console.log(props);
    return(
        <div className='book'>
            <img src={img} alt={title}/>
            <h3>{title}</h3> 
            <h4>{author}</h4>
          
        </div>
    );
};


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);