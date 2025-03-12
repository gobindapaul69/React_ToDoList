export function Header() {
    return (
        <>
            <header class="bg-body-tertiary sticky-top">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link active" href="#">About Us</a>
                            <a class="nav-link active" aria-current="page" href="#">Gallery</a>
                            <a class="nav-link active" aria-current="page" href="#">Rooms</a>
                        </div>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        </>
    );
}