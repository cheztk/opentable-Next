import Stars from "@/app/components/Stars";
import { calculateRaingReviewAverage } from "@/utils/calculateReviewRatingAverage";

import { Review } from "@prisma/client";

export default function Rating({reviews}: {reviews: Review[]}) {
    return(
        <div className="flex items-end">
        <div className="ratings mt-2 flex items-center">
          <p><Stars reviews={reviews}/></p>
          <p className="text-reg ml-3">{calculateRaingReviewAverage(reviews).toFixed(1)}</p>
        </div>
        <div>
          <p className="text-reg ml-4">{reviews.length} Review{reviews.length === 1? "" : "s"}</p>
        </div>
      </div>
    )
}