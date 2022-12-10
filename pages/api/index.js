export async function handler() {
    const response = await fetch("http://localhost:8080/bands");
    const data = await response.json();
    return (data.results)  
}
 