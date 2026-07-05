interface Props {

    category: string;

    product: string;

    description: string;

}

export default function PlatformCard({

    category,

    product,

    description,

}: Props) {

    return (

        <div
            className="
                rounded-2xl
                border
                border-border
                bg-surface
                p-6
                transition
                hover:-translate-y-1
            "
        >

            <div className="text-sm text-primary">

                {category}

            </div>

            <h3 className="mt-2 text-2xl font-semibold">

                {product}

            </h3>

            <p className="mt-3 text-secondary">

                {description}

            </p>

        </div>

    );

}