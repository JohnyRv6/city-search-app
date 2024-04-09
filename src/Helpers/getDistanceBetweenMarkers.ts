//Haversine formula to calculate the distance between 2 markers
export const getKmDistance = (lat1: number, lon1: number, lat2: number, lon2: number) =>
{
  const rad = function(x: number) {return x*Math.PI/180;}
  const R = 6378; // Earth radius in km
  const dLat = rad( lat2 - lat1 );
  const dLong = rad( lon2 - lon1 );
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
  Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //distance in Km
  const distance = R * c; 
  return distance ; 
}