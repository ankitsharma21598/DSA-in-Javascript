### Length of a String

```
let name ="Ankit";
console.log(name.length); //5
```

### Access String Element

```
let name ="Ankit"
console.log(name.charAt(2)); //k
console.log(name[2]); //k
console.log(name.charCodeAt(2)); // 107 (Ascii Code)
```

### Check Presence of Character

```
let name ="Ankit";
console.log(name.includes("m")); //false (& if present it return true)
console.log(name.indexOf("i")); //3 (& if not present it return -1)
console.log(name.lastIndexOf("t")); //4
```

### Compare Two Strings

```
let name="Ankit";
let anotherName="Aman";
console.log(name.localcompare(anotherName)); //1 (& if strings are equal it return 0)

```

### Replace Substring

```
const str = "Vishal is Best Frontend Developer. Vishal is Best Developer. ";
console.log(str.replace("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Vishal is Best Developer. "
console.log(str.replaceAll("Vishal", "Sujit")); // "Sujit is Best Frontend Developer. Sujit is Best Developer. "
```

### Substring of a String
```
let name="Ankit";
console.log(name.substring(2,4)); //ki
console.log(name.slice(-2)); //it

```
