const uri = 'http://localhost:5000/cities/all';

let fetchAPI = () => {
    fetch(uri)
        .then(resp => resp.json())
        .then(result => this.setState({ city: result }))
        .catch(err => console.log(err));
};

export default fetchAPI();