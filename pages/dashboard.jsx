import React, { useState, useEffect, createRef } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Paper, Typography, useMediaQuery, CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select, CssBaseline } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "../pages/styles";
import mapStyles from "./mapStyles";

import PlaceDetails from "../components/PlaceDetails/PlaceDetails";
import Header from "../components/Header/Header";

import { getWeatherData, getPlacesData } from "../lib/travelAdvisorAPI"

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
    const matches = useMediaQuery("(min-width:600px)");
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.length &&
                    places.map((place, i) => (
                        <div className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)} key={i}>
                            {!matches ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {" "}
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={
                                            place.photo
                                                ? place.photo.images.large.url
                                                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                                        }
                                    />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )}
                        </div>
                    ))}
                {weatherData?.list?.length &&
                    weatherData.list.map((data, i) => (
                        <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
                        </div>
                    ))}
            </GoogleMapReact>
        </div>
    );
};

const App = () => {
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);

    const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [places, setPlaces] = useState([]);

    const [autocomplete, setAutocomplete] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) > rating);

        setFilteredPlaces(filtered);
    }, [rating]);

    useEffect(() => {
        if (bounds) {
            setIsLoading(true);

            getWeatherData(coords.lat, coords.lng).then((data) => setWeatherData(data));

            getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
                try {
                    setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
                } catch (error) {
                    console.log(error);
                }
                setFilteredPlaces([]);
                setRating("");
                setIsLoading(false);
            });
        }
    }, [bounds, type]);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoords({ lat, lng });
    };

    return (
        <>
            <CssBaseline />
            <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />

            <div className="grid grid-cols-3 h-screen relative overflow-hidden">
                <div className="overflow-y-auto">
                    <div className="">
                        <List
                            isLoading={isLoading}
                            childClicked={childClicked}
                            places={filteredPlaces.length ? filteredPlaces : places}
                            type={type}
                            setType={setType}
                            rating={rating}
                            setRating={setRating}
                        /></div>
                </div>
                <div className=" col-span-2">
                    <Map
                        setChildClicked={setChildClicked}
                        setBounds={setBounds}
                        setCoords={setCoords}
                        coords={coords}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        weatherData={weatherData}
                    /></div>
            </div>

            {/* <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4} style={{ overflow: "auto" }}>
                    <List
                        isLoading={isLoading}
                        childClicked={childClicked}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Map
                        setChildClicked={setChildClicked}
                        setBounds={setBounds}
                        setCoords={setCoords}
                        coords={coords}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        weatherData={weatherData}
                    />
                </Grid>
            </Grid> */}
        </>
    );
};

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);

    return (
        <div className={classes.container}>
            <Typography variant="h4">Food & Dining around you</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="type">Type</InputLabel>
                        <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="rating">Rating</InputLabel>
                        <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value="all">All</MenuItem>
                            <MenuItem value="3">Above 3.0</MenuItem>
                            <MenuItem value="4">Above 4.0</MenuItem>
                            <MenuItem value="4.5">Above 4.5</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (
                            <Grid ref={elRefs[i]} key={i} item xs={12}>
                                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
        </div>
    );
};

export default App;