import { create } from 'zustand'; import { persist } from 'zustand/middleware'; import type { HouseSystem,ZodiacMode } from '../engine';
type S={houseSystem:HouseSystem;zodiac:ZodiacMode;theme:'dark'|'light';set:(p:Partial<S>)=>void}; export const useSettings=create<S>()(persist((set)=>({houseSystem:'placidus',zodiac:'tropical',theme:'dark',set:(p)=>set(p)}),{name:'cosmos-settings'}));
