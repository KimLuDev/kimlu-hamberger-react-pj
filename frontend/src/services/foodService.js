import { menu_foods, menu_foods_tags } from "../data";

export const getAll = async () => menu_foods

export const search = async searchTerm =>
    menu_foods.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

export const getAllTags = async () => menu_foods_tags;

export const getAllByTags = async tag => {
    if (tag === 'All') return getAll();
    return menu_foods.filter(item => item.tags?.includes(tag));
}

export const getById = async foodId =>
    menu_foods.find(item => item.id === foodId);