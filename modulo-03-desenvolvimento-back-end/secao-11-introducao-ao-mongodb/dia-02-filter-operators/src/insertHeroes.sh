#!/bin/bash

mongoimport --db=class --collection=superheroes --drop --file=heroes.json
