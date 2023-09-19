function convertirHeureFormat24(heure12h) {
    const regex = /^(\d{1,2}):(\d{2})([APap][Mm])$/;
    const match = heure12h.match(regex);
  
    if (!match) {
      return "Format d'heure invalide. Utilisez le format HH:MMAM/PM.";
    }
  
    let heures = parseInt(match[1]);
    const minutes = match[2];
    const amPm = match[3].toLowerCase();
  
    if (heures === 12) {
      heures = (amPm === "pm") ? 12 : 0; // Minuit (00:00) ou midi (12:00)
    } else if (amPm === "pm") {
      heures += 12; // Après-midi/soir
    }
  
    return `${heures.toString().padStart(2, "0")}:${minutes}`;
  }
  
  // Récupérer l'argument passé en ligne de commande (heure au format 12 heures)
  const args = process.argv.slice(2);
  
  // Vérifier si un argument a été passé
  if (args.length !== 1) {
    console.log("Veuillez fournir une heure au format 12 heures en argument.");
  } else {
    const heure12h = args[0];
    const heure24h = convertirHeureFormat24(heure12h);
    console.log(heure24h);
  }
  