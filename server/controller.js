module.exports = {
    getHouses: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.get_houses()
          .then( houses => res.status(200).send( houses ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },
      addHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { house_name, house_address, city, state, zip } = req.body;
        console.log(req.body)
        dbInstance.add_houses([ house_name, house_address, city, state, zip ])
        // console.log(house_name, house_address, city, state, zip)
        .then( (body) =>  res.status(200).send(body) )
        .catch( err => {
            res.status(500).send({errorMessage: "didnt work"});
            console.log(err)
        });

    
    },

    deleteHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req
        console.log(params)
        console.log(req)
        dbInstance.delete_product([ params.id ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
          res.status(500).send({errorMessage: "why do I keep changing these things."});
          console.log(err)
        } );
    }

    
    }