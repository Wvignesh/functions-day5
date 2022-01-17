   // prime numbers 

(function(a)
{
  var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(v=1;v<=a[i];v++)
        {
            if(a[i]%v===0)
            {
                count++ ;
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
 
})

([1,2,3,4,5,6,7,8,9,11]);  


// odd numbers 

(function(n) {
    for (const result of n) {
      if(result % 2 !==0){
        console.log("OddNumber : ",result);
      }
    }
    
  })([1,2,3,4,5,6,7,8,9,10]);
  
  
// palindrome numbers

  (function(a){
    var result="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        result+=a[i];
        var count=0 ;
        
        for(j=0;j<result.length;j++)
        {
            if(result[j]===result[((result.length-1)-j)])
            {
                count++ ;
                
            }
        }
        if(count===result.length)
        {
            ans+=result+" " ;
        }
        result="";
    }
    console.log(ans);
 
}) ([1,11,343,411,575,600,7887,80108,999,11]);

// title caps

const titleCaps = function(word){
    word = word.toLowerCase().split(' ')
    for (let i = 0;i < word.length;i++) {
      word[i] = word[i].charAt(0).toUpperCase()+word[i].slice(1);
      
    }
    return word.join(' ')
  }
  
  console.log(titleCaps("learn new things"));

  // sum

  (function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i];
    }
    console.log(res);
})([1,2,3,4,5,7]);

// rotate array

(function(a,k){
    n=a.length;
 c=[] ;
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i];
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" ";
  }
  d+=c[c.length-1];
  console.log(d);
})

([1,2,3,4,5],3);

// return medium

(function(a,b){
    var c=[];
    var n=a.length;
    var p=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<p)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }
    
     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<p)
     {
         for(let m=j;m<p;m++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     console.log(med);
    
})

([1,2,3,7],[4,5,6,8]);

// remove duplicates

(function(a){
    var b=[];
    var n=a.length;
    for(let i=0;i<n-1;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(a[i]===a[j])
            {
                delete a[j]
            }
        }
    }
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%10===Math.floor(a[i]%10))
        {
            b.push(a[i]);
        }
    }
    let c=""
    for(let i=0;i<b.length-1;i++)
     {
         c+=b[i]+" ";
    }
    c+=b[b.length-1];
     console.log(c);
    
})
([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);