interface DataProps {
	name: String
	firstFlight: String
	id: Number
}

export const useFavorites = defineStore('favorites', {
	state: () => ({ favorites: [] }),
	actions: {
		addFavorite(name: string, firstFlight: string, id: number) {
			const isExist = this.favorites.filter((e: DataProps) => e.id === id)
			if (isExist.length > 0) {
				this.favorites = this.favorites.filter((e: DataProps) => e.id !== id)
			} else {
				const createFavorite = { name, firstFlight, id }
				this.favorites.push(createFavorite)
			}

			console.log('updated')
		},
		removeFavorite(id: number) {
			this.favorites = this.favorites.filter((e: DataProps) => e.id !== id)
		},
	},
})
