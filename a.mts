import mod2, {default as def} from 'foo'

// Works in both TS and Node
mod2.def()
mod2.default()

console.log(mod2)
console.log(def)

// TS thinks this is false; it is actually true
console.log(def === mod2)

// TS thinks this works but it doesn't (at runtime def === mod2)
def()

