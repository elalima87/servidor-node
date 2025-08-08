const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.iuvbikw.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean,
})




Note.find({}).then(result => {

  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

