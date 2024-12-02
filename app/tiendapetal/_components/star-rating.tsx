interface StarRatingProps {
    rating: number
    count: number
}

export function StarRating({ rating, count }: StarRatingProps) {
    return (
        <div className="flex items-center gap-1">
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${
                            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
            <span className="text-sm text-gray-600">({count})</span>
        </div>
    )
}

