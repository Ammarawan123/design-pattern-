
const getDatabaseConnection = (() => {
  let instance = null; // Private variable trapped inside closure

  const createInstance = () => {
    console.log("Naya connection bann raha hai...");
    return {
      query: (sql) => console.log(`Executing: ${sql}`)
    };
  };

  return () => {
    if (!instance) {
      instance = createInstance();
    } else {
      console.log("Purana connection reuse ho raha hai");
    }
    return instance;
  };
})();

// Pehli baar object request karte hain
const db1 = getDatabaseConnection();
// Doosri baar request karte hain
const db2 = getDatabaseConnection();
console.log( db1 === db2); 


