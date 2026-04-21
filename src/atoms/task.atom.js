import { atom } from 'jotai';

// Atom qui stock le token
export const taskAtom = atom([]);

// Atom dérivé qui représente quel user est connecte 
export const selectedUserAtom = atom(null);