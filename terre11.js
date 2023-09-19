function convertirHeureFormat12(heure24h) {
    const heureMinutes = heure24h.split(":");
    const heures = parseInt(heureMinutes[0]);
    const minutes = parseInt(heureMinutes[1]);
  
    if (heures >= 0 && heures <= 11) {
      // Si l'heure est entre 00:00 et 11:59, c'est du matin (AM)
      if (heures === 0) {
        // Si c'est 00:00, c'est minuit
        return `12:${minutes.toString().padStart(2, "0")}AM`;
      } else {
        return `${heures.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}AM`;
      }
    } else {
      // Si l'heure est entre 12:00 et 23:59, c'est de l'après-midi/soir (PM)
      if (heures === 12) {
        // Si c'est 12:00, c'est midi
        return `12:${minutes.toString().padStart(2, "0")}PM`;
      } else {
        return `${(heures - 12).toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}PM`;
      }
    }
  }
  
  // Récupérer l'argument passé en ligne de commande (heure au format 24 heures)
  const args = process.argv.slice(2);
  
  // Vérifier si un argument a été passé
  if (args.length !== 1) {
    console.log("Veuillez fournir une heure au format 24 heures en argument.");
  } else {
    const heure24h = args[0];
    const heure12h = convertirHeureFormat12(heure24h);
    console.log(heure12h);
  }
  