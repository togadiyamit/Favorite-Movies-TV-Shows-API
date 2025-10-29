import { Router } from 'express';
import {
    createEntry,
    listEntries,
    updateEntry,
    deleteEntry,
    searchEntries,
} from '../controllers/entry.controllers';


const router = Router();


router.post('/', createEntry);
router.get('/', listEntries);
router.put('/:id', updateEntry);
router.delete('/:id', deleteEntry);
router.get('/search', searchEntries);


export default router;