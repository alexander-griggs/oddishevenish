function oddishOrEvenish(n)
{
  var sum = 0;
  n = String(n).split('');
  for (var i = 0; i < n.length; i++)
  {
    sum += parseInt(n[i]);
  }
  if (sum % 2 == 0) {return "Evenish";}
  return "Oddish";
}
