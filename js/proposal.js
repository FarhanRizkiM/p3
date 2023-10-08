document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/proposal.json'); // Mengambil file proposal.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const proposalData = await response.json();

        // Select elements by their IDs
        const judulElement = document.getElementById("judul");
        const deskripsiElement = document.getElementById("deskripsi");

         // Populate HTML elements with user data
         judulElement.textContent = proposalData.Judul;
         deskripsiElement.textContent = proposalData.Deskripsi;

 
     } catch (error) {
         console.error('Error:', error);
     }
 });