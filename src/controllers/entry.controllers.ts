import { Request, Response, NextFunction } from 'express';
import Entry from '../models/entry.model';
import { entrySchema } from '../validations/entry.validations';
import { Op } from 'sequelize';


async function createEntry(req: Request, res: Response, next: NextFunction) {
    try {
        const { error } = entrySchema.validate(req.body);
        if (error) {
            return res.status(400).json({ success: false, message: error.message });
        }


        const entry = await Entry.create(req.body as any);
        return res.status(201).json({ success: true, data: entry });
    } catch (err) {
        next(err);
    }
}


async function listEntries(req: Request, res: Response, next: NextFunction) {
    try {
        const page = parseInt((req.query.page as string) || '1', 10);
        const limit = parseInt((req.query.limit as string) || '10', 10);
        const offset = (page - 1) * limit;


        const result = await Entry.findAndCountAll({ limit, offset });


        return res.json({
            success: true,
            total: result.count,
            page,
            perPage: limit,
            data: result.rows,
        });
    } catch (err) {
        next(err);
    }
}


async function updateEntry(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const { error } = entrySchema.validate(req.body);
        if (error) {
            return res.status(400).json({ success: false, message: error.message });
        }


        const entry = await Entry.findByPk(id);
        if (!entry) {
            return res.status(404).json({ success: false, message: 'Entry not found' });
        }


        await entry.update(req.body as any);
        return res.json({ success: true, data: entry });
    } catch (err) {
        next(err);
    }
}


async function deleteEntry(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const entry = await Entry.findByPk(id);
        if (!entry) {
            return res.status(404).json({ success: false, message: 'Entry not found' });
        }


        await entry.destroy();
        return res.json({ success: true, message: 'Entry deleted successfully' });
    } catch (err) {
        next(err);
    }
}


async function searchEntries(req: Request, res: Response, next: NextFunction) {
    try {
        const q = (req.query.q as string) || '';
        const entries = await Entry.findAll({
            where: {
                title: {
                    [Op.like]: '%' + q + '%',
                },
            },
        });


        return res.json({ success: true, total: entries.length, data: entries });
    } catch (err) {
        next(err);
    }
}


export { createEntry, listEntries, updateEntry, deleteEntry, searchEntries };