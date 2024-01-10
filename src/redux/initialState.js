const initialState = {  
    posts: [
        {
            id: '1',
            title: 'Article1 title',
            categoryId: '1',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-01'),
            author: 'John Doe'
        },
        {
            id: '2',
            title: 'Article2 title',
            categoryId: '1',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-02'),
            author: 'John Doe'
        },
        {
            id: '3',
            title: 'Article3 title',
            categoryId: '2',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-03'),
            author: 'John Doe'
        },   
        {
            id: '4',
            title: 'Article4 title',
            categoryId: '2',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-01'),
            author: 'John Doe'
        },
        {
            id: '5',
            title: 'Article5 title',
            categoryId: '3',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-02'),
            author: 'John Doe'
        },
        {
            id: '6',
            title: 'Article6 title',
            categoryId: '3',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('2022-02-03'),
            author: 'John Doe'
        },                      
    ],
    categories: [
        { id: '1', categoryName: 'Sport'  },
        { id: '2', categoryName: 'News' },
        { id: '3', categoryName: 'Movies' }                
    ],
 }; 
export default initialState;