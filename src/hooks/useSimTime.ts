import { useState } from 'react'; export function useSimTime(){const [date,setDate]=useState(new Date()); return {date,setDate,now:()=>setDate(new Date())};}
