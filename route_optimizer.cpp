#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

struct Place {
    string name;
    double lat;
    double lon;
};

double distanceCalc(Place a, Place b) {

    const double R = 6371;

    double dLat = (b.lat - a.lat) * M_PI / 180.0;
    double dLon = (b.lon - a.lon) * M_PI / 180.0;

    double x =
        sin(dLat / 2) * sin(dLat / 2) +
        cos(a.lat * M_PI / 180.0) *
        cos(b.lat * M_PI / 180.0) *
        sin(dLon / 2) * sin(dLon / 2);

    double c = 2 * atan2(sqrt(x), sqrt(1 - x));

    return R * c;
}

vector<int> greedyRoute(vector<Place>& places) {

    int n = places.size();

    vector<bool> visited(n, false);
    vector<int> order;

    order.push_back(0);
    visited[0] = true;

    while (order.size() < n) {

        int last = order.back();

        double minDist = 1e9;
        int nextIndex = -1;

        for (int i = 0; i < n; i++) {

            if (!visited[i]) {

                double d = distanceCalc(
                    places[last],
                    places[i]
                );

                if (d < minDist) {
                    minDist = d;
                    nextIndex = i;
                }
            }
        }

        visited[nextIndex] = true;
        order.push_back(nextIndex);
    }

    return order;
}

int main() {

    vector<Place> places = {
        {"Charminar",17.3616,78.4747},
        {"Golconda Fort",17.3833,78.4011},
        {"Ramoji Film City",17.2543,78.6808}
    };

    vector<int> route = greedyRoute(places);

    cout << "Optimized Tour Route:\n";

    for (int i : route) {
        cout << places[i].name << endl;
    }

    return 0;
}