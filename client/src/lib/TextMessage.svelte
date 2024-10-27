<script lang="ts">
    let mysqlTimestamp: string = "2024-10-23 20:30:00";

    function toReadableTimestamp(timestamp: string): string {
        let readableTimestamp: string[] = [];

        const [date, time] = mysqlTimestamp.split(" ");
        const [year, month, day] = date.split("-").map(Number);
        const [hour, minute, second] = time.split(":").map(Number);

        // console.log(`${month}/${day}/${year}`)

        const now = new Date();

        if(now.getFullYear() == year && now.getMonth() + 1 == month) {
            if(now.getDate() == day) {
                readableTimestamp.push("Today");
            } else if(now.getDate() - 1 == day) {
                readableTimestamp.push("Yesterday")
            } else {
                readableTimestamp.push(`${month}/${day}/${year}`);
            }
        } else {
            readableTimestamp.push(`${month}/${day}/${year}`);
            
        }

        readableTimestamp.push("at");
        readableTimestamp.push(`${hour%12}:${minute}`);

        let meridian: string = hour/12>1 ? "PM" : "AM";

        readableTimestamp.push(meridian);

        return readableTimestamp.join(" ");
    }
</script>
<div class="w-full my-4 p-4 flex hover:bg-neutral-900 duration-150 gap-6 rounded-lg">
    <div>
        <div class="w-16 aspect-square h-auto">
            <div class="w-full h-full rounded-full flex justify-center items-center overflow-hidden">
                <img src="https://via.placeholder.com/64" alt="XMLHttpRequest's profile">
            </div>
        </div>
    </div>
    <div class="flex-10 flex flex-col">
        <div class="flex items-center gap-4 mb-2">
            <h2 class="font-semibold text-lg">XMLHttpRequest</h2>
            <p class="cursor-default text-neutral-400">
                {toReadableTimestamp(mysqlTimestamp)}
            </p>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            facere enim dolores eum saepe blanditiis illo exercitationem sequi
            eligendi. Odit voluptatum qui atque eius neque sed sit placeat
            veritatis adipisci? Sequi, voluptatibus eos? Quo explicabo in
            impedit expedita doloribus voluptas, corrupti pariatur quasi
            laudantium est? Exercitationem totam corrupti deleniti aspernatur
            ipsa qui recusandae, sunt ipsam voluptas alias, nam culpa
            cupiditate. Quos maxime esse soluta, accusantium quia unde
            necessitatibus, aperiam consectetur quaerat dolorum nemo illo autem
            perspiciatis blanditiis officiis optio in similique quo libero
            nostrum aut asperiores eos illum velit. Atque! Laboriosam sint
            atque, at inventore, eos consequatur officia deserunt rerum fuga
            dolorum officiis consectetur iusto quis architecto quod eum itaque,
            hic possimus quaerat. Velit illum asperiores quidem cum ipsa
            quisquam! Culpa aut vero fugit quo praesentium necessitatibus!
            Voluptates soluta similique nisi hic omnis veritatis eaque facere
            quos, laborum eius! Fugit provident nostrum enim ipsa amet nobis
            ullam, eius quidem veniam.
        </p>
    </div>
</div>
