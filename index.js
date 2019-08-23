const express = require('express');
const app = express();

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());

app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'mustache')

app.get('/', function(req, res) {
  const state = process.env.BUSTED_STATE || "Maybe"
  res.render('index', { state });
});

app.get('/set', function(req, res) {
    let token = req.query.token;

    if (token == null) {
    	res.send('Nothing to see here. 🚷');
    	return;
    }

    if (token !== process.env.AUTH_TOKEN) {
    	res.send(
		  stylizedString("Nice try!")
    	);
    	return;
    }

    let value = req.query.value;

    if (value.toLowerCase() === "yes") {
    	res.send(
		  stylizedString("Yes! ✌🏼")
    	);
    	process.env["BUSTED_STATE"] = "Yes"
		// set cache values
    } else {
    	res.send(
		  stylizedString("No! 🙅🏻‍♀️")
    	);

    	process.env["BUSTED_STATE"] = "No"
    	// set cache values
    }
});

function stylizedString(value) {
	return `
		<div class="centered">${value}</div>
	`;
}

// Start script

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
