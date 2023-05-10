const App=()=>{
    return React.createElement('div',{},[
        React.createElement('h1',{class:'title'}, 'react is rendered')
    ])
}

ReactDOM.render(
 React.createElement(App),
 document.getElementById('root')
)


